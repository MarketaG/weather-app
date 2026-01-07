import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useCitySearch } from "../hooks/useCitySearch";
import { formatDate } from "../utils/date";
import { findNearestCity } from "../utils/location";

import {
  MapPin,
  CalendarDays,
  ChevronDown,
  MagnifyingGlass,
  Home,
  ArrowPath,
} from "../assets/icons";

import "./SectionHeader.scss";
import { POPULAR_CITIES } from "../data/popularCities";
import type { City } from "../types/weather";

type SectionHeaderProps = {
  currentCity: City;
  selectedDay: string;
  onCityChange: (city: City) => void;
  recentCities: City[];
};

/**
 * SECTION HEADER
 * Displays current city and date with a search to change location.
 */
export const SectionHeader = ({
  currentCity,
  selectedDay,
  onCityChange,
  recentCities,
}: SectionHeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSearching = searchQuery.trim().length > 0;

  const debouncedQuery = useDebounce(searchQuery, 300);
  const { results: filteredCities, loading: isSearchLoading } =
    useCitySearch(debouncedQuery);

  const isLoading = isSearching && isSearchLoading;

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

  const handleCitySelect = (city: City) => {
    onCityChange(city);
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const nearestCity = await findNearestCity(latitude, longitude);

        if (nearestCity) {
          handleCitySelect(nearestCity);
          localStorage.setItem("lastCity", JSON.stringify(nearestCity));
        } else {
          alert("Could not find a nearby city.");
        }
      },
      (error) => {
        console.error(error);
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            "Location access was denied. Please enable location permissions in your browser settings to use this feature."
          );
        } else {
          alert("Unable to retrieve your location.");
        }
      }
    );
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
                  {recentCities.length > 0 && (
                    <div className="dropdown-section-header">
                      <div className="dropdown-section-title">
                        Last searched
                      </div>
                      {recentCities.map((city) => (
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
              {isSearching ? (
                isLoading ? (
                  <div className="dropdown-section-header">
                    <div className="dropdown-loading">
                      <span className="spinner" />
                      <span>Searching</span>
                    </div>
                  </div>
                ) : filteredCities.length > 0 ? (
                  filteredCities.map((city) => (
                    <div key={city.id} className="dropdown-section-header">
                      <button
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
                )
              ) : null}

              {/* Default popular locations */}
              {!isSearching && (
                <div className="dropdown-section-header">
                  <div className="dropdown-section-title">
                    Popular locations
                  </div>
                  {POPULAR_CITIES.map((city) => (
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
        <span className="date-text">
          <span className="date-text">
            {selectedDay
              ? formatDate(selectedDay, {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })
              : ""}
          </span>
        </span>
      </div>
    </div>
  );
};
