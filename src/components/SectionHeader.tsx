import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  CalendarDays,
  ChevronDown,
  MagnifyingGlass,
  Home,
  ArrowPath,
} from "../assets/icons";
import "./SectionHeader.scss";
import { mockCities, mockRecentCities } from "../data/mockData";
import type { City } from "../types/weather";

type SectionHeaderProps = {
  currentCity: City;
  onCityChange: (city: City) => void;
};

/**
 * SECTION HEADER
 * Displays current city and date with a search to change location.
 */
export const SectionHeader = ({
  currentCity,
  onCityChange,
}: SectionHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSearching = searchQuery.trim().length > 0;

  const filteredCities = mockCities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isSearching) return;

    // TODO: Replace mock loading with debounced API search

    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery, isSearching]);

  const formatDate = (
    date: Date = new Date(),
    locale: string | undefined = undefined
  ) => {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const handleCitySelect = (city: City) => {
    onCityChange(city);
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const handleUseCurrentLocation = () => {
    // TODO
    console.log("Use current location clicked");
  };

  return (
    <div className="header-info">
      <div className="location-info" ref={dropdownRef}>
        <button
          className="location-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <MapPin className="icons-xl" />
          <span className="location-text">
            {currentCity.name}, {currentCity.country}
          </span>
          <span className="chevron-wrapper">
            <ChevronDown
              className={`chevron ${isDropdownOpen ? "open" : ""}`}
            />
          </span>
        </button>

        {isDropdownOpen && (
          <div className="dropdown">
            {/* Search input */}
            <div className="dropdown-search">
              <MagnifyingGlass className="icons-sm dropdown-search-icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dropdown-search-input"
                autoFocus
              />
            </div>

            {/* List of all items */}
            <div className="dropdown-list">
              {!isSearching && (
                <>
                  {/* Search by location */}
                  <div className="dropdown-section-header">
                    <div className="dropdown-section-title">
                      Search by location
                    </div>
                    <button
                      className="dropdown-item"
                      onClick={handleUseCurrentLocation}
                    >
                      <Home className="icons-sm" />
                      <span>Current location</span>
                    </button>
                  </div>

                  {/* Last searched */}
                  {mockRecentCities.length > 0 && (
                    <div className="dropdown-section-header">
                      <div className="dropdown-section-title">
                        Last searched
                      </div>
                      {mockRecentCities.map((city) => (
                        <button
                          key={city.id}
                          className="dropdown-item"
                          onClick={() => handleCitySelect(city)}
                        >
                          <ArrowPath className="icons-sm" />
                          <span>
                            {city.name}, {city.country}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Search results */}
              {isSearching && (
                <>
                  {isLoading ? (
                    <div className="dropdown-section-header">
                      <div className="dropdown-loading">Loading</div>
                    </div>
                  ) : filteredCities.length > 0 ? (
                    filteredCities.map((city) => (
                      <div className="dropdown-section-header">
                        <button
                          key={city.id}
                          className="dropdown-item"
                          onClick={() => handleCitySelect(city)}
                        >
                          <MapPin className="icons-sm" />
                          <span>
                            {city.name}, {city.country}
                          </span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="dropdown-empty">No results found</div>
                  )}
                </>
              )}

              {/* Default popular locations */}
              {!isSearching && (
                <div className="dropdown-section-header">
                  <div className="dropdown-section-title">
                    Popular locations
                  </div>
                  {mockCities.map((city) => (
                    <button
                      key={city.id}
                      className="dropdown-item"
                      onClick={() => handleCitySelect(city)}
                    >
                      <MapPin className="icons-sm" />
                      <span>
                        {city.name}, {city.country}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="date-info">
        <CalendarDays className="icons-xl" />
        <span className="date-text">{formatDate()}</span>
      </div>
    </div>
  );
};
