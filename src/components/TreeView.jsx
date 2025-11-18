import { useState } from "react";

export default function TreeView({ node, onSelect, selected }) {
  const [open, setOpen] = useState(true);

  if (!node) return null;

  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className="tree-node">
      <div
        className={`tree-node-content ${selected === node.name ? "selected" : ""}`}
        onClick={() => onSelect(node.name)}
      >
        {hasChildren ? (
          <button className="tree-toggle" onClick={() => setOpen(!open)}>
            {open ? "▼" : "▶"}
          </button>
        ) : (
          <span className="tree-spacer" />
        )}

        <span className="tree-label">{node.name}</span>
      </div>

      {hasChildren && open && (
        <ul className="tree-children">
          {node.children.map((child, i) => (
            <TreeView
              key={i}
              node={child}
              onSelect={onSelect}
              selected={selected}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
