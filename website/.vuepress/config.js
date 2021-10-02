module.exports = {
  "title": "Manabitv",
  "description": "Keep learning, keep sharing",
  "base": '/',
  "dest": "docs",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6631455815655205",
        crossorigin: "anonymous"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Course",
        "icon": "reco-document",
        "items": [
          {
            "text": "Docker",
            "link": "/blogs/docker/",
            "icon": "reco-blog"
          },
          {
            "text": "Deep Learning",
            "icon": "reco-blog",
            "items": [
              {
                "text": "Basic Neural Network",
                "link": "/blogs/ai/deep-learning/basic-neural-network/",
                "icon": "reco-blog"
              },
              {
                "text": "Anomaly Detection",
                "link": "/blogs/ai/deep-learning/anomaly_detection/",
                "icon": "reco-blog"
              },
            ]
          }
        ]
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "Youtube",
            "link": "https://www.youtube.com/channel/UC249ZCTGpyttnCsdc7aSpWg",
            "icon": "reco-douyin"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/manabitv",
            "icon": "reco-github"
          },
          {
            "text": "Slack",
            "link": "https://join.slack.com/t/manabi-tv/shared_invite/zt-dys8x4h1-bDmMzVmutsFlrLbXo9lNrg",
            "icon": "reco-api"
          }
        ]
      },
      {
        "text": "Privacy",
        "link": "/privacy",
        "icon": "reco-beian"
      }
    ],
    "sidebar": {
      "/blogs/docker/": [
        {
          title: "Docker",
          collapsable: true,
          children: [
            ["/blogs/docker/docker-install","Install docker"],
            ["/blogs/docker/docker-proxy", "Setting proxy for docker"],
            ["/blogs/docker/logging-rotate", "Logging rotation for docker"]
          ]
        }
      ],
      "/blogs/ai/deep-learning/basic-neural-network/": [
        {
          title: "Basic Neural Network",
          collapsable: true,
          children: [
            ["/blogs/ai/deep-learning/basic-neural-network/why_convolution", "Why Covolution?"],
            ["/blogs/ai/deep-learning/basic-neural-network/transfer-learning", "Transfer Learning"],
            ["/blogs/ai/deep-learning/basic-neural-network/stride_convolution", "Stride Convolution"],
            ["/blogs/ai/deep-learning/basic-neural-network/problem-on-data", "Problem On Data"],
            ["/blogs/ai/deep-learning/basic-neural-network/pooling", "Pooling"],
            ["/blogs/ai/deep-learning/basic-neural-network/padding", "Padding"],
            ["/blogs/ai/deep-learning/basic-neural-network/multiple-convolutions", "Multiple Convolutions"],
            ["/blogs/ai/deep-learning/basic-neural-network/mismatch-data", "Mismatching Data"],
            ["/blogs/ai/deep-learning/basic-neural-network/end-to-end-deeplearning", "End To End Deeplearning"],
            ["/blogs/ai/deep-learning/basic-neural-network/cnn_example", "Cnn Example"],
            ["/blogs/ai/deep-learning/basic-neural-network/cnn_example_2", "Cnn Example 2"],
            ["/blogs/ai/deep-learning/basic-neural-network/bias-variance", "Bias Variance"]
          ]
        }
      ],
      "/blogs/ai/deep-learning/anomaly_detection/": [
        {
          title: "Anomaly Detection",
          collapsable: true,
          children: [
            ["/blogs/ai/deep-learning/anomaly_detection/history", "Lịch sử phát triển"],
            ["/blogs/ai/deep-learning/anomaly_detection/convolution_autoencoder", "Convolution AutoEncoder"],
          ]
        }
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "Youtube",
        "desc": "Enjoy when you can, and endure when you must.",
        "logo": "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg",
        "email": "trinhsp89@gmail.com",
        "link": "https://www.youtube.com/channel/UC249ZCTGpyttnCsdc7aSpWg"
      },
      {
        "title": "Github",
        "desc": "Welcome to my github",
        "logo": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "link": "https://github.com/huutrinh68"
      },
      {
        "title": "Slack",
        "desc": "Welcome to manabitv slack group",
        "logo": "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
        "link": "https://join.slack.com/t/manabi-tv/shared_invite/zt-dys8x4h1-bDmMzVmutsFlrLbXo9lNrg"
      }
    ],
    "subSidebar": "auto",
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "huutrinh68",
    "authorAvatar": "/avatar.png",
    "record": "ManabiTV",
    "startYear": "2018",
    "noFoundPageByTencent": false,
    "editLink": true,
    "editLinkText": "Help us improve this page!",
  },
  "markdown": {
    "lineNumbers": true
  }
}
