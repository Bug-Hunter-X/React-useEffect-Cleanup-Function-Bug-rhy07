```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for cleanup function
    return () => {
      console.log('Cleanup function called');
      // Perform cleanup actions
    };
  }, [count]); // Only run cleanup when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```