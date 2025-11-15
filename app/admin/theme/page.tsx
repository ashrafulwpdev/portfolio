'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Save, Download } from 'lucide-react'

import themeData from '@/data/theme.json'

export default function ThemePage() {
  const [theme, setTheme] = useState(themeData)

  const handleSave = () => {
    console.log('Saving theme configuration:', theme)
    alert('Theme configuration saved to console!')
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(theme, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
    const exportFileDefaultName = 'theme.json'

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Theme Editor</h1>
          <p className="text-muted-foreground mt-2">
            Customize your design system tokens
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={handleExport}>
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2" onClick={handleSave}>
            <Save className="w-4 h-4" />
            Save
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Spacing Scale</CardTitle>
          <CardDescription>
            Define your spacing tokens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(theme.spacing).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={`spacing-${key}`}>{key}</Label>
                <Input
                  id={`spacing-${key}`}
                  value={value}
                  onChange={(e) =>
                    setTheme({
                      ...theme,
                      spacing: { ...theme.spacing, [key]: e.target.value },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Border Radius</CardTitle>
          <CardDescription>
            Define your border radius tokens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(theme.borderRadius).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={`radius-${key}`}>{key}</Label>
                <div className="flex gap-2 items-center">
                  <Input
                    id={`radius-${key}`}
                    value={value}
                    onChange={(e) =>
                      setTheme({
                        ...theme,
                        borderRadius: { ...theme.borderRadius, [key]: e.target.value },
                      })
                    }
                  />
                  <div
                    className="w-10 h-10 bg-primary shrink-0"
                    style={{ borderRadius: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Font Sizes</CardTitle>
          <CardDescription>
            Define your typography scale
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(theme.fontSize).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={`font-${key}`}>{key}</Label>
                <Input
                  id={`font-${key}`}
                  value={value}
                  onChange={(e) =>
                    setTheme({
                      ...theme,
                      fontSize: { ...theme.fontSize, [key]: e.target.value },
                    })
                  }
                />
                <p style={{ fontSize: value }} className="truncate">
                  Sample Text
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>
            Light and dark theme colors (HSL format)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <h3 className="font-medium mb-3">Light Theme</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(theme.colors.light).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={`light-${key}`}>{key}</Label>
                    <Input
                      id={`light-${key}`}
                      value={value as string}
                      className="font-mono text-sm"
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Dark Theme</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(theme.colors.dark).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={`dark-${key}`}>{key}</Label>
                    <Input
                      id={`dark-${key}`}
                      value={value as string}
                      className="font-mono text-sm"
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            See how your theme changes look
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-6 bg-background border rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Sample Heading</h3>
              <p className="text-muted-foreground mb-4">
                This is sample text to preview your theme settings.
              </p>
              <div className="flex gap-2">
                <Button>Primary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
