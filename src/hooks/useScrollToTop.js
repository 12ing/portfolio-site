// src/hooks/useScrollToTop.js
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 라우트가 바뀔 때마다 페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }, [pathname])
}
