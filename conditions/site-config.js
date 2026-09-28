'use strict';

// Everything specific to this location lives here. To build the same site for
// another place, copy the folder and edit this file — see SETUP.md.

const SITE = {
  brand: 'Tampa Bay Boating',    // shown in the browser tab title before the name
  name: 'Alafia River',
  subtitle: 'Gibsonton / Riverview, FL · Hillsborough Bay, Tampa Bay',
  shortName: 'Alafia',          // used in small labels, e.g. "NWS forecast · Alafia"
  home: { name: 'Tampa Bay Boating', url: '../' },   // "back" link in the header (omit to hide)
  appId: 'tampabayboating.com',     // identifies this site to NOAA's API (their request)

  // The spot the forecast, sun and moon are for: the mouth of the Alafia River.
  lat: 27.855,
  lon: -82.41,
  tz: 'America/New_York',

  nws: {
    office: 'TBW',                          // forecast office that writes the marine forecast
    officeName: 'NWS Tampa Bay/Ruskin',
    officeUrl: 'https://www.weather.gov/tbw/',
    marineZone: 'GMZ830',
    marineZoneName: 'Tampa Bay',
    synopsisName: 'Bonita Beach to Suwannee River',
  },

  // Tide predictions (NOAA CO-OPS station with high/low predictions).
  tides: { id: '8726674', name: 'East Bay, Tampa', shortName: 'East Bay', lat: 27.9231, lon: -82.4214 },

  // Water temperature and observed-vs-predicted water level (null to hide).
  water: { id: '8726674', name: 'East Bay', lat: 27.9231, lon: -82.4214 },

  // Live wind observations, via the NWS observations API (null to hide).
  wind: {
    id: 'OPTF1', name: 'Old Port Tampa', note: 'at the mouth of Old Tampa Bay', lat: 27.8578, lon: -82.5528,
    url: 'https://www.ndbc.noaa.gov/station_page.php?station=optf1',
  },

  // Tidal current predictions. Flood/ebb directions come from NOAA; floodTo/ebbTo
  // just say where each direction leads. Empty list to hide.
  currents: [
    { id: 'ACT8596', bin: 1, name: 'Hillsborough Bay · Cut C Channel, marker 21', lat: 27.846, lon: -82.44367, floodTo: 'Tampa', ebbTo: 'Tampa Bay' },
    { id: 't03010', bin: 10, name: 'Tampa Bay · Port Manatee Channel Entrance', lat: 27.66395, lon: -82.59877, floodTo: 'Hillsborough & Old Tampa Bay', ebbTo: 'the Gulf' },
  ],
  currentsNote: 'NOAA calls the current at the Alafia entrance itself weak and variable; the ship channel just west of the river mouth (Cut C) is the nearest prediction.',

  days: 7,
  refreshMinutes: 30,
};
