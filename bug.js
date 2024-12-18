```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop because the count changes
    // every render, triggering another render.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```