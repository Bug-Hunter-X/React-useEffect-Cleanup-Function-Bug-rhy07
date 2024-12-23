# React useEffect Cleanup Function Bug

This repository demonstrates a common bug related to the cleanup function in React's `useEffect` hook. The provided code snippet showcases an incorrect implementation of the cleanup function, leading to potential unexpected behavior.

## Bug Description

The bug lies within the `useEffect` hook. The cleanup function is called more frequently than intended. This can lead to performance issues and potential memory leaks.

## Solution

The solution involves correctly specifying the dependencies array for `useEffect`.  Only add elements to the dependency array that will trigger a re-run of the `useEffect` hook, and its cleanup.  If you want to run the cleanup on component unmount only, leave the array empty (`[]`).