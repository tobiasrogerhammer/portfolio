"use client"

import { useEffect, useRef } from "react"

export const MobileGeometricShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrame: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Draw animated geometric shapes
      const shapes = [
        { size: 60, color: 'rgba(18, 77, 149, 0.15)', rotation: time * 0.5 },
        { size: 80, color: 'rgba(255, 107, 107, 0.1)', rotation: -time * 0.3 },
        { size: 100, color: 'rgba(43, 187, 173, 0.12)', rotation: time * 0.4 },
      ]

      shapes.forEach((shape, index) => {
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(shape.rotation)
        
        // Draw hexagon
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i
          const x = Math.cos(angle) * shape.size
          const y = Math.sin(angle) * shape.size
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.strokeStyle = shape.color
        ctx.lineWidth = 2
        ctx.stroke()
        
        ctx.restore()
      })

      time += 0.02
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  )
}
