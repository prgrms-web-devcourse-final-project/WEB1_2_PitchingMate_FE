class TabModel {
  title: string
  content: React.ReactNode
  currentButton: { previous: boolean; next: boolean; isSubmit?: boolean }

  constructor(
    title: string,
    content: React.ReactNode,
    currentButton: { previous: boolean; next: boolean; isSubmit?: boolean },
  ) {
    this.title = title
    this.content = content
    this.currentButton = currentButton
  }
}

export default TabModel
