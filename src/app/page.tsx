import ContentBlock from '@/components/ContentBlock/page'
import StickyProductContentBlock from '@/components/StickyProductContentBlock/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContentBlock>
        <StickyProductContentBlock/>
      </ContentBlock>
    </main>
  )
}
