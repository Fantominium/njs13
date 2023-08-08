import Centre2x2ContentBlock from '@/components/atoms/Centre2x2ContentBlock/page'
import ContentBlock from '@/components/atoms/ContentBlock/page'
import StickyProductContentBlock from '@/components/atoms/StickyProductContentBlock/page'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContentBlock>
        <StickyProductContentBlock/>
        <Centre2x2ContentBlock/>
      </ContentBlock>
    </main>
  )
}
