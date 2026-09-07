'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from '@/components/ui/Magnetic'
import { cn } from '@/lib/utils'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'solid' | 'outline' | 'bare'
  arrow?: boolean
}

/**
 * CTA do site. Retangular de propósito — cantos arredondados puxariam a
 * página para a estética de card de SaaS, que é justamente o que evitamos.
 */
export function Action({
  children,
  variant = 'solid',
  arrow = false,
  className,
  ...rest
}: Props) {
  return (
    <Magnetic className="inline-block">
      <a
        className={cn(
          'group inline-flex items-center gap-3 px-7 py-4 font-tech text-label uppercase tracking-[0.10em]',
          'transition-colors duration-200 ease-expo',
          variant === 'solid' && 'bg-chalk text-void hover:bg-accent hover:text-white',
          variant === 'outline' &&
            'border border-line-strong text-chalk hover:border-accent hover:text-accent-text',
          variant === 'bare' && 'px-0 py-2 text-ash hover:text-chalk',
          className
        )}
        {...rest}
      >
        {children}
        {arrow && (
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </a>
    </Magnetic>
  )
}
