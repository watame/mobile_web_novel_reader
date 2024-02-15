import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    // GitHubPagesにデプロイする際に base の指定が必須
    // https://vitepress.dev/reference/site-config#base
    base: '/mobile_web_novel_reader/',
    title: "Web小説サイトリーダー for iOS",
    description: "A VitePress Site",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      search: {
        provider: "local",
      },
      nav: [
        { text: 'Home', link: '/' },
        {
          text: "Repository",
          items: [
            {
              text: "Frontend",
              link: "https://github.com/takuron1996/MobileNovelReader",
            },
            {
              text: "Backend",
              link: "https://github.com/furutahidehiko/mobile_reader_novel_back",
            },
          ],
        }
      ],

      sidebar: [
        {
          text: 'ドキュメント一覧',
          items: [
            { text: '画面仕様書', link: '/display' },
            { text: 'DB仕様書', link: '/erd' }
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/watame/mobile_web_novel_reader' }
      ]
    }
  })
)
