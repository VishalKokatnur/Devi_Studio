import { Component } from 'react'

// Shows the real error on screen instead of a blank black page.
export default class ErrorBoundary extends Component {
  state = { err: null }
  static getDerivedStateFromError(err) { return { err } }
  render() {
    if (!this.state.err) return this.props.children
    return (
      <pre style={{ whiteSpace: 'pre-wrap', padding: 24, color: '#ffd873', background: '#111', minHeight: '100vh', font: '14px/1.5 monospace' }}>
        {'Something went wrong. Send this message to your developer:\n\n' + String(this.state.err.stack || this.state.err)}
      </pre>
    )
  }
}