Changed app.js filename to index.js

Switched app port to 3000

Changed exposed port from 8080 to 3000

Updated "27018:27017" to "27017:27017"

Renamed mongodb service to mongo

Updated depends_on to use mongo

Changed volume temp to - /mongodb_data:/data/db