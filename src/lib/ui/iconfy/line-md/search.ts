import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'line-md',
  icons: {
    search: {
      body: `
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2">
          <path
            stroke-dasharray="16"
            stroke-dashoffset="16"
            d="M10.5 13.5L3 21">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="16;0" />
          </path>
          <path
            stroke-dasharray="40"
            stroke-dashoffset="40"
            d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="40;0" />
          </path>
        </g>
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});
