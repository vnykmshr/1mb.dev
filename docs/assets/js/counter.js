/**
 * 1mb Counter
 * Anonymous community counter — no identity, just presence.
 */

(function () {
  'use strict';

  const API_URL = 'https://1mb-counter.vmx-builds.workers.dev';

  const counter = document.getElementById('counter');
  const countEl = document.getElementById('count');
  const button = document.getElementById('count-btn');

  if (!counter || !countEl || !button) return;

  // Check if user already voted (client-side memory)
  const hasVotedLocally = localStorage.getItem('1mb_voted') === 'true';

  // Format count with proper grammar
  function formatCount(count) {
    if (count === 0) return 'none yet';
    if (count === 1) return '1 other';
    return count.toLocaleString() + ' others';
  }

  // Fetch current count
  async function fetchCount() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      countEl.textContent = formatCount(data.count);
    } catch (e) {
      countEl.textContent = '—';
    }
  }

  // Submit vote
  async function vote() {
    if (hasVotedLocally || button.disabled) return;

    button.disabled = true;
    button.textContent = '...';

    try {
      const res = await fetch(API_URL, { method: 'POST' });
      const data = await res.json();

      countEl.textContent = formatCount(data.count);
      markAsVoted();

    } catch (e) {
      button.textContent = 'error';
      button.disabled = false;
    }
  }

  function markAsVoted() {
    localStorage.setItem('1mb_voted', 'true');
    button.textContent = 'counted';
    button.disabled = true;
    button.classList.add('voted');
  }

  // Init
  if (hasVotedLocally) {
    button.textContent = 'counted';
    button.disabled = true;
    button.classList.add('voted');
  }

  button.addEventListener('click', vote);
  fetchCount();

})();
