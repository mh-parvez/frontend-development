/*
📆 Date in Javascript:
```````````````````
1. Time Zones.
2. GMT (Greenwhich Mean Time) Time Zone.
3. UTC (Coordinated Universal Time)
4. ISO Standard (International Ogrnaization for Standardization)
5. How compurter keep track of time?
6. Unix Time and Unix Epoch. */


/* 
1. Time Zones:
`````````````
● Time zones represent different areas of the world that are offset from Coordinated Universal Time (UTC).
● JavaScript uses the browser or system time zone by default. */

const now = new Date();
console.log(now.toString()); // includes local time zone

/* 
2. GMT (Greenwich Mean Time)
````````````````````````````
● GMT is a time zone that used to be the world standard.
● It's effectively the same as UTC for most practical purposes. */

console.log(now.toGMTString()); // Deprecated, use toUTCString() instead


/* 
3. UTC (Coordinated Universal Time)
```````````````````````````````````
● UTC is the modern standard for world timekeeping.
● JavaScript Date objects can be displayed in UTC: */

console.log(now.toUTCString());


/* 
4. ISO Standard (International Organization for Standardization)
````````````````````````````````````````````````````````````````
● ISO 8601 is the standard date format: YYYY-MM-DDTHH:mm:ss.sssZ */

console.log(now.toISOString());


/* 
5. How Computers Keep Track of Time
```````````````````````````````````
● Computers use an internal clock, often maintained by a battery-powered CMOS chip.
● Time is tracked as the number of milliseconds since a fixed point: the Unix Epoch (Jan 1, 1970). */

console.log(Date.now()); // milliseconds since Jan 1, 1970


/* 
6. Unix Time and Unix Epoch
```````````````````````````
● Unix Epoch: 00:00:00 UTC on January 1, 1970.
● Unix Time: Seconds (or milliseconds) since the Unix Epoch. */

const timestamp = Date.now();
console.log(timestamp); // e.g., 1745660428397