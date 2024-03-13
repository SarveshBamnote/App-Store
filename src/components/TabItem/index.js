import './index.css'

const TabItem = props => {
  const {eachTabItem, selectedTabItem, isSelected} = props
  const {tabId, displayText} = eachTabItem

  const onClickTabItem = () => {
    selectedTabItem(tabId)
  }

  const activeBtnClassNames = isSelected ? 'tab-btn selected' : 'tab-btn'

  return (
    <li className="tab-list-item">
      <button
        className={activeBtnClassNames}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
