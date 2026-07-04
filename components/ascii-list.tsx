export function AsciiList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-base leading-6 text-body">
          <span className="font-medium text-ink">[+]</span> {item}
        </li>
      ))}
    </ul>
  );
}
