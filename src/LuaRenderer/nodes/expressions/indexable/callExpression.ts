import * as lua from "LuaAST";
import { render } from "LuaRenderer";
import { RenderState } from "LuaRenderer/RenderState";
import { renderArguments } from "LuaRenderer/util/arguments";

export function renderCallExpression(state: RenderState, node: lua.CallExpression) {
	const expStr = render(state, node.expression);
	const argsStr = renderArguments(state, node.params);
	return `${expStr}(${argsStr})`;
}
