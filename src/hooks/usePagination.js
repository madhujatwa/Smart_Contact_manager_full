import { useState } from 'react';

export default function usePagination(initialPage = 0) {
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const goNext = () => setPage((p) => p + 1);
  const goPrev = () => setPage((p) => p - 1);
  const goTo = (n) => setPage(n);

  return { page, totalPages, setTotalPages, goNext, goPrev, goTo };
}