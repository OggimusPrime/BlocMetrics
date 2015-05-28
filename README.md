##BlocMetrics - Dashboard
BlocMetrics is a basic API Tracking Service and Reporting tool.

https://ryanhaase-blocmetrics.herokuapp.com


When a user signs up, they are provided with a unique authentication token and
registered with the standalone BlocMetrics API.


The standalone API is the data warehouse for all projects(web apps) and events.

https://ryanhaase-api-blocmetrics.herokuapp.com/

https://github.com/OggimusPrime/BlocMetrics-API


At this time the events are displayed on the BlocMetrics Dashboard in a simple bar chart.

---
The BlocMetrics Dashboard is primarily built in AngularJS, while the API is built in Rails.

Due to this separation, in development the dashboard runs on `localhost:3000`, while the API runs on `localhost:3001`.

---
###TODO:
This was a project during my Bloc.io Web Developer Apprenticeship.  Given more time, I would love to implement/fix the following:

1. Currently if a user attempts to signup and the token generation fails, the user signup fails.    It would be better if the user could signup and able to regenerate the token.
2. When a user adds a project, the projects list is not updated without a page refresh.  Need another get request to the API on success of the post API call.
3. The API is handling the heavy lifting on sorting a specific projects events and sending it to the dashboard.  The API should only be sending a JSON object while the dashboard takes care of the sorting.  
4. Itemized lists of events (sortable) on the dashboard.  
