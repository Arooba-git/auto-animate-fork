import { useEffect, useRef, useState } from "react"
import autoAnimate, { AutoAnimateOptions, AutoAnimationPlugin } from "../index"

/**
 * AutoAnimate hook for adding dead-simple transitions and animations to react.
 * @param options - Auto animate options or a plugin
 * @returns
 */
export function useAutoAnimate(
  options: Partial<AutoAnimateOptions> | AutoAnimationPlugin
) {
  const element = useRef<Element>(null)
  useEffect(() => {
    if (element.current instanceof HTMLElement)
      autoAnimate(element.current, options)
  }, [element])
  return element
}