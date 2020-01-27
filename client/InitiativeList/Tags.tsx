import React = require("react");
import { TagState } from "../../common/CombatantState";
import { CommandContext } from "./CommandContext";

export function Tags(props: {
  tags: TagState[];
  combatantId: string;
}) {
  const commandContext = React.useContext(CommandContext);
  return (
    <span className="combatant__tags">
      {props.tags.map(tag => {
        return (
          <span className="tag">
            <span className="tag__text">{tag.Text}</span>
            <span
              className="fa-clickable fa-times"
              onClick={() => commandContext.RemoveTagFromCombatant(props.combatantId, tag)}
            ></span>
          </span>
        );
      })}
    </span>
  );
}
