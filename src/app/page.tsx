"use client"
import { Toast, Button, toast } from '@heroui/react';

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1>Hero UI</h1>
      <p>A simple and customizable UI library for React.</p>
      
      <Toast.Provider />
      <Button onPress={() => toast("Simple message")}>
        Show toast
      </Button>
    </div>
  );
}