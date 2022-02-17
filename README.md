# CIS Youth Hymnal

Built with: 
- Svelte
- Routify (for routing)
- MDsveX (for Markdown parsing)

## Contributing
You can contribute new hymn lyrics by following the following guidelines:

1. Start each block with a **bolded** label. e.g. `**Verse 1**` (will show as **Verse 1**)

2. At the end of each line, add two spaces. This helps markdown know to start a new line. 

3. At the top of the file, include block of text (known as "frontmatter") enclosed within 3 dashes `---`. It looks like this:
```
---
title: You Are My Strength
medleyFrom: 0
medleyTo: 0
---
```
> Note: If there's no medleys, put the number as 0. Otherwise, put the numbers of the respective medleys separated by commas. e.g. `medleyFrom: 11, 78`

Full Example:
```
---
title: You Are My Strength
medleyFrom: 0
medleyTo: 0
---

**Verse 1**  <- 2 spaces!
You are my strength when I am weak  <- 2 spaces!
You are the treasure that I seek  <- 2 spaces!
You are my All in All.

**Verse 2**  <- 2 spaces!
Seeking You as a precious jewel,  <- 2 spaces!!!
Lord to give up I'd be a fool,  <- 2. Spaces.
You are my All in All.

**Chorus**  <- 2 spaces!
Jesus, Lamb of God, worthy is Your Name!  <- 2.
Jesus, Lamb of God, worthy is Your Name!  
```
---
The above code will show up in the app as:

**Verse 1**  
You are my strength when I am weak   
You are the treasure that I seek  
You are my All in All.

**Verse 2**  
Seeking You as a precious jewel,  
Lord to give up I'd be a fool,  
You are my All in All.

**Chorus**  
Jesus, Lamb of God, worthy is Your Name!  
Jesus, Lamb of God, worthy is Your Name!
