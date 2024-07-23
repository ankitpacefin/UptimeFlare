const pageConfig = {
  // Title for your status page
  title: "Pocketful Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.ankitdalal.com/', label: 'Websites' },
    { link: 'https://AI.ankitdalal.com/', label: 'Free Ai' },
    { link: 'mailto:info@ankitdalal.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'pocketful_home',
      // `name` is used at status page and callback message
      name: 'Pocketful Home',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Website Home Page',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'pocketful_blog',
      // `name` is used at status page and callback message
      name: 'Pocketful Blog',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/blog/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Blog Page',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/blog/',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },
        {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'tools_page',
      // `name` is used at status page and callback message
      name: 'Tools Landing Page',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/tools',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Tools Landing Page',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/tools',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'calculators_page',
      // `name` is used at status page and callback message
      name: 'Calculators Page',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/calculators',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Calculators Landing Page',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/calculators',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },  
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'stcoks_page',
      // `name` is used at status page and callback message
      name: 'Stcoks Page',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/stocks',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Stocks Landing Page',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/stocks',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },    
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'home_waitlist_api',
      // `name` is used at status page and callback message
      name: 'Home Waitlist API',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.pocketful.in/landing-util/v2/waitlists',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Home Page Refferal waitlist API',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.pocketful.in/landing-util/v2/waitlists',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },   
   {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'ipo_api',
      // `name` is used at status page and callback message
      name: 'IPO APi (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/tradeipo/getAllIpo',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful IPO Tools Page APi To get IPO Related Things',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/tradeipo/getAllIpo',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    }, 
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'listed_companies_api',
      // `name` is used at status page and callback message
      name: 'Listed Companies APi (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/company/names?page=1',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Listed Companies Tools Page APi To get Companies Names Related Things',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/company/names?page=1',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    }, 
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'fii_dii_api',
      // `name` is used at status page and callback message
      name: 'FII DII API (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/nse/fiidiiTradeReact',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful FII DII Tools Page APi To get FII DII Data',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/nse/fiidiiTradeReact',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'stocks_faq_api',
      // `name` is used at status page and callback message
      name: 'Stocks FAQ API (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/company/overview?isin=INE748C01038',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Stocks Pages Section Api To GEt FAQ Data',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/company/overview?isin=INE748C01038',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },  
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'bulk_deals_api',
      // `name` is used at status page and callback message
      name: 'Bulk Deals API (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/corporateActions/bulkdeals?from=2024-07-04&page=1&startWith=',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Tools Pages Bulk Deals API To get Bulk and Block Deals Data',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/corporateActions/bulkdeals?from=2024-07-04&page=1&startWith=',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'what_if_api',
      // `name` is used at status page and callback message
      name: 'What IF API (Open APi)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://dev-trade.pocketful.in/api/open-apis/company/logos',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is Pocketful Tools What IF Tools Api To Get Comapnies Logos',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://dev-trade.pocketful.in/api/open-apis/company/logos',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 20000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'DalalUptime',
       //  Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //     responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //     checkLocationWorkerRoute: 'https://xxx.example.com',
    },   
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://vercel-apprise01.vercel.app/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "discord://SeoBot@1262651214353535038/y-hYjHH9i2lqWi8r3qWIMYudMjkXMv2fdAY4QPT0_q6wLvbmiB8SCs-sttaUgUeEntcg/?username=SEO&avatar_url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60dqTjnTgfJok-_HkKzDgH52YkRyF61yr1g&s",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Kolkata",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
   gracePeriod: 3,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the  status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
