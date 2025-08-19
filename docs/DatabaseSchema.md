# Database Schema

## Users Collection
- userId (String, unique)
- username (String)
- password (String, hashed)
- role (String: 'Admin', 'Utility Officer', 'Viewer')
- email (String)

## Alerts Collection
- alertId (String, unique)
- type (String: 'TRAFFIC', 'AIR_QUALITY', 'WASTE')
- timestamp (Date)
- severity (String: 'High', 'Medium', 'Low')
- details (Object)