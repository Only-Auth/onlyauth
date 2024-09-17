import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import CardLayout from '@/layout/CardLayout'

function Consent({}) {
  return (
    <CardLayout
      header={'Sign in'}
      subHeader={'to continue to'}
      domain={'example.com'}
    >
      <Link className="flex items-center gap-1 border-2 border-gray-400 px-2 rounded-full cursor-pointer  max-w-xs">
        <p className="text-sm text-ellipsis overflow-hidden">
          example@gmail.com
        </p>
        <ChevronDown size={16} />
      </Link>
      <div className="pt-10 w-full">
        <div className="flex gap-3">
          <Button variant="secondary" className="flex-1 rounded-full h-12">
            Cancel
          </Button>
          <Button className="flex-1 rounded-full h-12">Continue</Button>
        </div>
      </div>
    </CardLayout>
  )
}

export default Consent
