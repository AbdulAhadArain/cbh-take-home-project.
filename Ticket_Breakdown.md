# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1

## Update Agents schema in the database and add a new attribute to store agent id (agentId) (5 hours)

- the attribute should be able to store alpha numeric value
- the attribute should have a constraint of uniquieness to
- the attribute should have a constraint of not null
- populate the existing agents with the given patern FACILITYCODE_INCREMENTING_NUMBERS
- perform analysis on current db and estimate any down times and propose an effective solution

# Ticket 2

## Update backend API to capture new attribute (agentId) (4 hours)

- update create agent endpoint to capture agentId
- update updateAgent endpoint to capture agentId
- add duplication validation in both endpoints
- add not null validation in both endpoints

# Ticket 3

## Update the frontend form to able to capture agent id with validations (6 hours)

- add agent id field in the agent add / update form and their repective api calls
- show duplicate error on both forms if occur
- agentId is mandatory
- show agentId in agent listing

# Ticket 4

## Add new function to get shifts by agentIds and capture agentId in report (8 hours)

- create a new function to get shifts by agentId's
- updateGenerate report function to include agentId while generating PDF
