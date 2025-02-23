import AppContent from './components/layout/AppContent'
import AppFooter from './components/layout/AppFooter'
import AppHeader from './components/layout/AppHeader'
import AppSider from './components/layout/AppSider'

function App() {
	return (
		<>
			<AppHeader />
			<AppContent>
				<AppSider />
			</AppContent>
			<AppFooter />
		</>
	)
}

export default App
