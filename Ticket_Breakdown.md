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

1) The first ticket should be to add the new field custom_id on the Agent table and to alter the crud Agent by adding the new field in all its functions.
This new field must not be the primary_key, but it will have the id (pk) as the default value.
Then, the facilities will have the option to set it when they are creating or updating agents, and it will be returned in the agent model when it's been retrieved.

2) The second ticket should be to modify the function `getShiftsByFacility` to may use both fields, id and custom_id, to filter the shifts, but it must guarantee that all old calls do not break. This method must be overloaded as the easiest way to accomplish this goal.
The custom_id must be included in the data returned as well.

3) The third ticket should be to modify the `generateReport` function to show the custom_id, removing the original id, if it has been displayed.

4) At last, the method used to start the report creation must be modified to be able to use the custom_id and call the `getShiftsByFacility` with the new parameter.

Ps: Depending on the complexity of the project, tickets 2, 3, and 4 can be treated as just one to simplify the process and make it faster.




