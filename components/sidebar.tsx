"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle, MessageSquare, Settings, Moon, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

interface SidebarProps {
  conversations: { id: string; title: string }[]
  activeConversation: string | null
  onNewConversation: () => void
  onSelectConversation: (id: string) => void
}

export function Sidebar({ conversations, activeConversation, onNewConversation, onSelectConversation }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={`relative h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4">
        <Button
          onClick={onNewConversation}
          className="w-full justify-start gap-2 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <PlusCircle className="h-4 w-4" />
          {!collapsed && <span>New chat</span>}
        </Button>
      </div>

      <div className="px-2 overflow-y-auto" style={{ height: "calc(100vh - 180px)" }}>
        {conversations.map((conversation) => (
          <Button
            key={conversation.id}
            variant="ghost"
            className={`w-full justify-start mb-1 truncate ${
              activeConversation === conversation.id ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <MessageSquare className="h-4 w-4 mr-2 shrink-0" />
            {!collapsed && <span className="truncate">{conversation.title}</span>}
          </Button>
        ))}
      </div>

      <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="justify-start"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                {!collapsed && "Light mode"}
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                {!collapsed && "Dark mode"}
              </>
            )}
          </Button>

          <Button variant="ghost" size="sm" className="justify-start">
            <Settings className="h-4 w-4 mr-2" />
            {!collapsed && "Settings"}
          </Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-10"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>
    </div>
  )
}
