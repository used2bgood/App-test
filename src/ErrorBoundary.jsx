import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error){ return { hasError: true, error }; }
  componentDidCatch(error, info){ console.error('Embed runtime error:', error, info); }
  render(){
    if (this.state.hasError) {
      return (
        <div style={{padding:'1rem', background:'#fff3cd', border:'1px solid #ffeeba', borderRadius:8}}>
          <h3 style={{marginTop:0}}>Something crashed while rendering.</h3>
          <pre style={{whiteSpace:'pre-wrap'}}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
