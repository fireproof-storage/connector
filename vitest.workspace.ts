import { defineWorkspace } from "vitest/config";

import betterSqlite3 from "./vitest.better-sqlite3.config.ts";
import nodeSqlite3Wasm from "./vitest.node-sqlite3-wasm.config.ts";

export default defineWorkspace([nodeSqlite3Wasm, betterSqlite3]);