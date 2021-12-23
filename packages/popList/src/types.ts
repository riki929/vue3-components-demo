// 列表项
export interface ListItem {
  avatar?: string,    // 头像
  title?: string,     // 标题
  desc?: string,      // 描述
  time?: string,      // 时间
  tag?: string,       // 标签内容
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface ListOptions {
  title: string,
  content: ListItem[]
}

// 操作选项
export interface ActionsOptions {
  text: string,
  icon?: string
}