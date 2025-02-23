interface AppContentProps {
	children: React.ReactNode
}

const AppContent = ({ children }: AppContentProps) => {
	return <main>{children}</main>
}

export default AppContent
