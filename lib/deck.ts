export function clampSlideIndex(requested: number, total: number) {
  if (!Number.isFinite(requested) || requested < 1) {
    return 1;
  }
  if (requested > total) {
    return total;
  }
  return requested;
}
