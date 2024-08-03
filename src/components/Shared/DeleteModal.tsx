'use client'

import { Trash2 as TrashIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export default function DeleteModal () {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant='ghost' size='icon' className='text-error hover:bg-inherit hover:text-error-hover'>
                <TrashIcon className='w-5 h-5' />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this product?
        </DialogDescription>
        <DialogFooter>
          <div className='flex items-center gap-2'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button variant='destructive'>Delete</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
