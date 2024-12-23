```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    //only run cleanup when component unmounts or count changes
    return () => {
      clearInterval(interval);
      console.log('Cleanup function called');
    };
  }, [count]);

  useEffect(() => {
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```