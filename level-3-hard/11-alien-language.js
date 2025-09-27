// Write a function to determine the order of 
// characters in an alien language.

// Assume you suddenly find a list of words from an alien 
// language. If they are sorted in ascending order of their 
// language, return the order of all characters present in 
// the list. e.g: ["ba", "cb", "cd", "ad"] the order of all
// characters is "cbad"
// and from ["wrt", "wrf", "er", "ett", "rftt"] the order of
// all characters is "wertf"
const wordsList = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(wordsList));


/**
 * Given an array of words sorted in an unknown (alien) language,
 * return a string representing the character order according to the guide's rules.
 *
 * This implementation:
 * - Collects all unique characters
 * - Compares adjacent words to extract the first differing character and add an edge
 * - Runs DFS-based topological sort (post-order) and returns the reversed order
 * - Detects cycles (invalid ordering) and returns '' in that case
 */
function alienOrder(words) {
  // 1) collect all unique characters
  const nodes = new Set();
  for (const w of words) for (const ch of w) nodes.add(ch);

  // 2) build adjacency list (directed graph) from adjacent word comparisons
  const adj = {};
  for (const ch of nodes) adj[ch] = new Set(); // use set to avoid duplicate edges

  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];
    const b = words[i + 1];

    // Find first position where they differ
    const len = Math.min(a.length, b.length);
    let found = false;
    for (let j = 0; j < len; j++) {
      if (a[j] !== b[j]) {
        // a[j] should come before b[j] => edge a[j] -> b[j]
        adj[a[j]].add(b[j]);
        found = true;
        break;
      }
    }
    // If no differing char and a is longer than b, that's an invalid ordering
    if (!found && a.length > b.length) {
      // e.g., ["abc", "ab"] is invalid
      return ''; // or throw an error depending on desired behaviour
    }
  }

  // 3) DFS topological sort
  const visited = {}; // 'visiting' flags: 0 = unvisited, 1 = visiting, 2 = visited
  for (const ch of nodes) visited[ch] = 0;

  const outStack = []; // nodes in post-order (to be reversed)
  let hasCycle = false;

  function dfs(node) {
    if (hasCycle) return;        // fast bail-out if we already found a cycle
    if (visited[node] === 1) {   // seen in current path -> cycle
      hasCycle = true;
      return;
    }
    if (visited[node] === 2) return; // already processed

    visited[node] = 1;           // mark as visiting
    for (const neigh of adj[node]) {
      dfs(neigh);
    }
    visited[node] = 2;           // mark as fully visited
    outStack.push(node);         // post-order push
  }

  // Run DFS for every node (necessary for disconnected graphs)
  for (const ch of nodes) {
    if (visited[ch] === 0) dfs(ch);
    if (hasCycle) return ''; // invalid (cycle) -> no valid order
  }

  // 4) reverse post-order to get topological order
  return outStack.reverse().join('');
}