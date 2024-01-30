---
# https://vitepress.dev/reference/default-theme-team-page
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const frontMembers = [
  {
    avatar: 'https://github.com/takuron1996.png',
    name: 'Snorlax',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/takuron1996' },
    ]
  },
  {
    avatar: 'https://github.com/kohama-t.png',
    name: 'kohama-t',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kohama-t' },
    ]
  }
]
const backMembers = [
  {
    avatar: 'https://github.com/furutahidehiko.png',
    name: 'furutahidehiko',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/furutahidehiko' },
    ]
  },
  {
    avatar: 'https://github.com/araikansen.png',
    name: 'araikansen',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/araikansen' },
    ]
  },
  {
    avatar: 'https://github.com/masayakawanishi1994.png',
    name: 'masayakawanishi1994',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/masayakawanishi1994' },
    ]
  }
]
const infraMembers = [
  {
    avatar: 'https://github.com/watame.png',
    name: 'watame',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/watame' },
    ]
  },
    {
    avatar: 'https://github.com/muroshima.png',
    name: 'muroshima',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/muroshima' },
    ]
  },
  {
    avatar: 'https://github.com/shottt.png',
    name: 'shottt',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/shottt' },
    ]
  },
  {
    avatar: 'https://github.com/atsushiL.png',
    name: 'atsushiL',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/atsushiL' },
    ]
  }
]
</script>


<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            メンバー
        </template>
        <template #lead>
            開発メンバー
        </template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
        <template #title>フロントエンド</template>
        <template #lead>このプロジェクトのフロントエンドチーム</template>
        <template #members>
            <VPTeamMembers :members="frontMembers"/>
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>バックエンド</template>
        <template #lead>このプロジェクトのバックエンドチーム</template>
        <template #members>
            <VPTeamMembers :members="backMembers"/>
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>インフラ</template>
        <template #lead>このプロジェクトのインフラチーム</template>
        <template #members>
            <VPTeamMembers :members="infraMembers"/>
        </template>
    </VPTeamPageSection>
</VPTeamPage>

