# Names Exercise
In this exercise you'll create a simple table to display various names with a calculated score. The requirements are as follows:

- Use a Frontend Framework of your choice: (Angular, Vue, React, Ember...)
- Create a text input for entering names.
- Names can be submitted through a keypress (enter) or button click.
- Create an table with columns for row number, name, & score.
  -- This table should show any names added through the input in _alphabetical_ order.
  -- The third column, score, should display a value calculated on the name.
     --- The score is defined as: the sum of each alphabetic character of the name multiplied by it's position in the provided list (found in `names.json`) once sorted in alphabetic order.
     --- For example, the name COLIN is 938th in the list after being sorted. It has an alphabetic value of 3 + 15 + 12 + 9 + 14 = 53, thus the score would be 938 * 53 = 49714.
- Create a footer at the bottom of the table with a value that is the sum of the entire score column.
- Add the ability to remove any row in the list
- Extra: Create a button that bulk adds the provided list of names to the table `names.json`

If you have any extra time feel free to add any extra features or improvements you would like.