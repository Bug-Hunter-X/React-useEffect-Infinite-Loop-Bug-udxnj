# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the dependency array.  The `bug.js` file contains the buggy code, which leads to an infinite re-rendering cycle. The `bugSolution.js` shows the corrected code.