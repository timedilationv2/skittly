import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/timedilationv2/skittly/issues')
      .then(res => setIssues(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl">GitHub Issues</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url}>{issue.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

