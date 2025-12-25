import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ScholarshipFormProps {
  onSubmit: () => void;
}

export function ScholarshipForm({ onSubmit }: ScholarshipFormProps) {
  const [formData, setFormData] = useState({
    academicLevel: '',
    grade: '',
    gender: '',
    familyIncome: '',
    category: '',
    marks10th: '',
    marks12th: '',
    cgpa: '',
    disability: '',
    state: '',
    fieldOfStudy: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onSubmit();
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Student Information Form
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Fill in your details to find scholarships tailored for you
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Academic Level */}
                <div className="space-y-3">
                  <Label className="text-lg">1. Academic Level *</Label>
                  <RadioGroup
                    value={formData.academicLevel}
                    onValueChange={(value) => updateField('academicLevel', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="school" id="school" />
                      <Label htmlFor="school" className="font-normal cursor-pointer">
                        School (Class 1-12)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="post-matric" id="post-matric" />
                      <Label htmlFor="post-matric" className="font-normal cursor-pointer">
                        Post Matric (After 12th)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="college" id="college" />
                      <Label htmlFor="college" className="font-normal cursor-pointer">
                        College/University
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.academicLevel === 'school' && (
                    <div className="mt-3">
                      <Label>Current Class/Grade</Label>
                      <Select value={formData.grade} onValueChange={(value) => updateField('grade', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your class" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                            <SelectItem key={grade} value={`class-${grade}`}>
                              Class {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <Label className="text-lg">2. Gender *</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => updateField('gender', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal cursor-pointer">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Family Income */}
                <div className="space-y-3">
                  <Label className="text-lg">3. Annual Family Income *</Label>
                  <Select value={formData.familyIncome} onValueChange={(value) => updateField('familyIncome', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1lakh">Below ₹1 Lakh</SelectItem>
                      <SelectItem value="1-2.5lakh">₹1 - 2.5 Lakhs</SelectItem>
                      <SelectItem value="2.5-5lakh">₹2.5 - 5 Lakhs</SelectItem>
                      <SelectItem value="5-8lakh">₹5 - 8 Lakhs</SelectItem>
                      <SelectItem value="above-8lakh">Above ₹8 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="space-y-3">
                  <Label className="text-lg">4. Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => updateField('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Academic Marks */}
                <div className="space-y-3">
                  <Label className="text-lg">5. Academic Performance</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>10th Marks/Percentage</Label>
                      <Input
                        type="text"
                        placeholder="e.g., 85%"
                        value={formData.marks10th}
                        onChange={(e) => updateField('marks10th', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>12th Marks/Percentage</Label>
                      <Input
                        type="text"
                        placeholder="e.g., 90%"
                        value={formData.marks12th}
                        onChange={(e) => updateField('marks12th', e.target.value)}
                      />
                    </div>
                  </div>
                  {formData.academicLevel === 'college' && (
                    <div className="mt-3">
                      <Label>College CGPA/Percentage</Label>
                      <Input
                        type="text"
                        placeholder="e.g., 8.5 CGPA or 85%"
                        value={formData.cgpa}
                        onChange={(e) => updateField('cgpa', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                {/* Disability Status */}
                <div className="space-y-3">
                  <Label className="text-lg">6. Disability Status *</Label>
                  <RadioGroup
                    value={formData.disability}
                    onValueChange={(value) => updateField('disability', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-disability" />
                      <Label htmlFor="no-disability" className="font-normal cursor-pointer">
                        No Disability
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-disability" />
                      <Label htmlFor="yes-disability" className="font-normal cursor-pointer">
                        Person with Disability (PWD)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* State */}
                <div className="space-y-3">
                  <Label className="text-lg">7. State/UT *</Label>
                  <Select value={formData.state} onValueChange={(value) => updateField('state', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Field of Study */}
                <div className="space-y-3">
                  <Label className="text-lg">8. Field of Study (Optional)</Label>
                  <Select value={formData.fieldOfStudy} onValueChange={(value) => updateField('fieldOfStudy', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts/Humanities</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" size="lg" className="w-full">
                    Find My Scholarships
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
