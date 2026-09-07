'use client'

import { useEffect, useState } from 'react'

/**
 * Marca a seção em leitura. O rootMargin recorta a viewport numa faixa
 * estreita no centro, então a troca acontece quando a seção realmente domina
 * a tela — não quando encosta na borda.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting)
        if (!vis.length) return
        const top = vis.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActive(top.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}
