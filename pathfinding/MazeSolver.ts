const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

type Point = {
  x: number,
  y: number,
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  //base cases:

  //off map
  if(curr.x < 0 || curr.x >= maze[0].length || 
    curr.y < 0 || curr.y >= maze.length) {
    return false;
  }

  //on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  //at end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  //seen tile before
  if (seen[curr.y][curr.x]) {
    return false;
  }

  //recursive step:

  //pre step: push
  seen[curr.y][curr.x] = true;
  path.push(curr);

  //recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, {
        x: curr.x + x,
        y: curr.y + y,
      }, end, seen, path)) {
        return true;
      }
  }

  //post step: pop
  path.pop();

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
