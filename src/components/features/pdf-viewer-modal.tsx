"use client"

import { X } from "lucide-react"

type PdfViewerModalProps = {
  pdfUrl: string
  title: string
  isOpen: boolean
  onClose: () => void
}

export function PdfViewerModal({ pdfUrl, title, isOpen, onClose }: PdfViewerModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-[95vh] max-w-full sm:max-w-4xl lg:max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close PDF viewer"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
          <iframe
            src={`${pdfUrl}#view=Fit`}
            className="border-0 shadow-lg w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  )
}
