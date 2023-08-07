import Centre2x2ContentBlock from '@/components/Centre2x2ContentBlock/page'
import ContentBlock from '@/components/ContentBlock/page'
import StickyProductContentBlock from '@/components/StickyProductContentBlock/page'


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
